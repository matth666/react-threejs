import Moon from "@/db/models/Moon";

const moons = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { planetId },
    } = req;

    const moons = await Moon.query().where({ planetId });

    if (!moons) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(moons);
  }
};

export default moons;
