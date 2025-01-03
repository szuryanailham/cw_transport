import CardUnit from "@/components/CardUnit";
import { UnitsData } from "@/data/Units";

export default function Home() {
  return (
    <section className="p-5 py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto items-center">
      {UnitsData.map((unit, index) => (
        <CardUnit
          key={index} // Provide a unique key for each unit
          imageUrl={unit.imageUrl}
          unitName={unit.unitName}
          price={unit.price}
          description={unit.description}
        />
      ))}
    </section>
  );
}
