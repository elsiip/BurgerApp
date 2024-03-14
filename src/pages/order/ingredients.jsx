const Cheese = () => (
    <div className="bg-yellow-400 h-4 w-40 flex justify-center text-xs font-sans font-semibold">
      Cheese
    </div>
);

const Lettuce = () => (
  <div className="bg-green-500 h-4 w-40 flex justify-center text-xs font-sans font-semibold">
    Lettuce
  </div>
);

const Tomato = () => (
  <div className="bg-red-600 h-4 w-40 rounded-full flex justify-center text-xs text-white font-sans font-semibold"> 
    Tomato
  </div>
);

const Pickles = () => (
  <div className="flex gap-1 w-40">
    <div className="bg-lime-500 h-4 w-full rounded-full" />
    <div className="bg-lime-500 h-4 w-full rounded-full flex justify-center text-xs text-white font-sans font-semibold">
      Pickles
    </div>
    <div className="bg-lime-500 h-4 w-full rounded-full" />
  </div>
);

const Meat = () => (
  <div className="bg-red-800 h-4 w-40 flex justify-center text-xs text-white font-sans font-semibold">
    Meat
  </div>
);

const Mayo = () => (
  <div className="bg-orange-100 h-4 w-40 flex justify-center text-xs font-sans font-semibold">
    Mayo
  </div>
);

const Sauce = () => (
  <div className="bg-red-600 h-4 w-40 flex justify-center text-xs font-sans text-white font-semibold">
    Sauce
  </div>
);

export const BreadTop = () => (
  <div className="bg-orange-300 h-12 w-40 rounded-tl-full rounded-tr-full" />
);

export const BreadBottom = () => (
  <div className="bg-orange-300 h-12 w-40 rounded-bl-full rounded-br-full" />
);
  
export const Ingredient = ({type, onClickX}) => (
  <div className="relative">
    <div onClick={onClickX} className="absolute -top-1 -right-2 text-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white cursor-pointer opacity-0 hover:opacity-100">
      X
    </div>
    {type === "cheese" && <Cheese />}
    {type === "lettuce" && <Lettuce />}
    {type === "tomato" && <Tomato />}
    {type === "pickles" && <Pickles />}
    {type === "meat" && <Meat />}
    {type == "mayo" && <Mayo />}
    {type == "sauce" && <Sauce />}
  </div>
);