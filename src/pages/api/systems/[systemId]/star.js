import Star from "@/db/models/Star";

const star = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { systemId },
    } = req;

    const star = await Star.query().where({ systemId });

    if (!star) {
      res.sattus(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(star);
  }
};

export default star;
