export default function (req, res) {
    return res.status(200).json({'users':[{name:'pedro'},{name:'luis'}]})
}