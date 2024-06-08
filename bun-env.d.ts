declare module "bun" {
    interface Env {
        PORT: number
    }

    export const editor: string
}