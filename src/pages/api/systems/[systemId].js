import System from "@/db/models/System";

const system = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { systemId },
    } = req;

    const system = await System.query().findById(systemId);

    if (!system) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(system);
  }
};

export default system;
