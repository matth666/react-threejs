import System from "@/db/models/System";

const systems = async (req, res) => {
  if (req.method === "GET") {
    const systems = await System.query();

    if (!systems) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(systems);
  }
};

export default systems;
