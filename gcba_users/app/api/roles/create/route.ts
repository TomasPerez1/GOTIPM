import { PrismaClient } from "@prisma/client";

export async function GET(): Promise<Response> {
  try {
    const _roles = [
      { value: "dev", name: "Desarrollador" },
      { value: "rrhh", name: "Recursos humanos" },
      { value: "ceo", name: "Gerente" },
      { value: "marketing", name: "Marketing" },
    ];

    const prisma = new PrismaClient();

    const main = async () => {
      const created = await prisma.role.createMany({
        data: _roles
      });
      return created;
    };
    const createdRoles = await main();

    return Response.json(createdRoles);

  } catch (err) {
    console.log("Err creating roles", err);
    return Response.json([]);
  }
}