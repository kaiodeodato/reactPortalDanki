

export default async function getApi(target){
    const response = await fetch('https://portaldanki.onrender.com/' + target);

    return response

}