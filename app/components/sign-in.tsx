import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit" className="bg-black p-2 rounded-lg">
        Signin with GitHub
      </button>
    </form>
  );
}
