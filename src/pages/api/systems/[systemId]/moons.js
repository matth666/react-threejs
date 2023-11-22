import Moon from "@/db/models/Moon";

const moons = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { systemId },
    } = req;

    const moons = await Moon.query().where({ systemId });

    if (!moons) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(moons);
  }
};

export default moons;
