import Planet from "@/db/models/Planet";

const planet = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { planetId },
    } = req;

    const planet = await Planet.query().findById(planetId);

    if (!planet) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(planet);
  }
};

export default planet;
