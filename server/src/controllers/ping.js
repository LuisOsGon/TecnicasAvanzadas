class PingController {
    static index(req, res) {
        return res.send("pong");
    }
}

export default PingController;