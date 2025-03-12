"use server"
import { signIn, signOut } from "@/auth"

export async function doSocialLogin(formdata) {
    const action = formdata.get('action')

    await signIn(action, { redirectTo : "/testpage"})
}

// export async function doLogout() {
//     await signOut({redirectTo: '/'})
// }