import Star from "@/db/models/Star";

const stars = async (req, res) => {
  if (req.method === "GET") {
    const stars = await Star.query();

    if (!stars) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(stars);
  }
};

export default stars;
