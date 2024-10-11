

export function Inject(Dependecie: any) {
    return function (target: any, propertie: string) {

        if (!target[propertie]) {
            target[propertie] = new Dependecie();
        }
    }
}