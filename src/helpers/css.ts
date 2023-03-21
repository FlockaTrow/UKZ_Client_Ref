export function css (...args: Array<string|boolean>):string {
    return args.filter((style:string|boolean) => !!style).join(' ')
} 
