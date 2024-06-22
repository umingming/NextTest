export default function handler(request, response) {
    console.log(new Date());
    return response.status(200).json("완료");
}
