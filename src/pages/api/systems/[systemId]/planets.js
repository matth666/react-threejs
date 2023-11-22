import Planet from "@/db/models/Planet";

const planets = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { systemId },
    } = req;

    const planets = await Planet.query().where({ systemId });

    if (!planets) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(planets);
  }
};

export default planets;
