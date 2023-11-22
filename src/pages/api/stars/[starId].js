import Star from "@/db/models/Star";

const star = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { starId },
    } = req;

    const star = await Star.query().findById(starId);

    if (!star) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(star);
  }
};

export default star;
