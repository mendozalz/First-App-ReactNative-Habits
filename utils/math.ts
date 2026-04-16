export function Destructure(){
    const usuario = {
        nombre: "Lenin Mendoza",
        edad: 25,
        ciudad: "Bogota"
    }
    const {nombre, edad, ciudad} = usuario
    return `${nombre} tiene ${edad} años de edad y es de ${ciudad}`
}