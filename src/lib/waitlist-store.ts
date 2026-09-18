import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Server-only Supabase client using the service-role key. The waitlist table has
// RLS on with no policies, so this is the only key that can read or write it —
// never import this from a client component, and never expose the key with a
// NEXT_PUBLIC_ prefix.
//
// Edge-runtime-safe: @supabase/supabase-js is pure fetch-based HTTP, no Node
// built-ins, so it works under the next-on-pages edge invariant.

let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    // Fail loudly. Silently dropping a signup is worse than a 500 we can see.
    throw new Error(
      "Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

export async function isEmailInWaitlist(email: string): Promise<boolean> {
  const { data, error } = await getSupabaseAdmin()
    .from("waitlist")
    .select("id")
    .ilike("email", email)
    .limit(1);

  if (error) throw new Error(`Waitlist lookup failed: ${error.message}`);
  return (data ?? []).length > 0;
}

export async function addToWaitlist(
  email: string,
  name?: string
): Promise<void> {
  const { error } = await getSupabaseAdmin().from("waitlist").insert({
    email,
    name: name || null,
    source: "website",
  });

  if (error) throw new Error(`Failed to store waitlist signup: ${error.message}`);
}