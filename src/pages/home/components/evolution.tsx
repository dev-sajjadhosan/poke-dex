
import image from '../../../assets/demo.png'

export default function EvolutionSection() {
  return (
    <>
      <div className="flex flex-col gap-3 w-full h-full">
        <h3 className="text-sm font-medium">Pikachu Evolution Chain</h3>
        <div className="mt-5 flex gap-5 items-center justify-between h-full  rotate-30">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="flex gap-3 flex-col text-center w-44 h-44 -rotate-30">
              <div className="bg-secondary/75 w-full h-full rounded-full flex items-center justify-center">
                <img src={image} alt="" className="w-1/2 h-1/2 object-contain" />
              </div>
              <h3 className="text-md font-medium">Pikachu</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
