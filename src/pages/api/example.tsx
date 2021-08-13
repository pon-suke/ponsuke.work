export default async function example(req, res) {
    // console.log(req.headers);
    res.status(200).json({ name: 'John Doe' })
}