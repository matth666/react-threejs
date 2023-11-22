import Moon from "@/db/models/Moon";

const moon = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { moonId },
    } = req;

    const moon = await Moon.query().findById(moonId);

    if (!moon) {
      res.status(404).send({ error: "Not found" });

      return;
    }

    res.status(200).send(moon);
  }
};

export default moon;
