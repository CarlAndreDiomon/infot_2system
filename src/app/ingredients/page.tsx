import Navbar from "../../components/Navbar";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function ingredients(){
    

    return(
        
        <main className="w-screen h-full bg-white ">
            <Navbar/>
            
            
            <div className=" p-4 w-full h-full  ">
                <header className="font-bold">
                    <h1>Ingredients</h1>
                </header>

                 {/* Bibingka */}
                <Accordion type="single" collapsible className=" ">
                    <AccordionItem value="item-1" className= "border-2 rounded-lg shadow-black w-full h-full shadow-lg">
                        <AccordionTrigger className="font-bold text-xl">Bibingka</AccordionTrigger>
                            <AccordionContent>
                                <div className ="">
                                    <p>
                                        ▢1 cup rice flour<br/>
                                        ▢1/8 teaspoon salt<br/>
                                        ▢2 1/2 teaspoon baking powder<br/>
                                        ▢3 tablespoons butter<br/>
                                        ▢1/2 cup granulated sugar<br/>
                                        ▢1 cup coconut milk<br/>
                                        ▢1/4 cup fresh milk<br/>
                                        ▢1 piece salted duck egg sliced<br/>
                                        ▢1/2 cup grated cheese<br/>
                                        ▢3 pieces raw eggs<br/>
                                        ▢1/4 cup grated coconut<br/>
                                        ▢Pre-cut banana leaf<br/>

                                        Instructions <br/>
                                        (1.)Preheat oven to 375 degrees Fahrenheit. 

                                        (2.)Combine rice flour, baking powder, and salt then mix well. Set aside.

                                        (3.)Cream butter then gradually put-in sugar while whisking.

                                        (4.)Add the eggs then whisk until every ingredient is well incorporated.

                                        (5.)Gradually add the rice flour, salt, and baking powder mixture then continue mixing.

                                        (6.)Pour-in coconut milk and fresh milk then whisk some more for 1 to 2 minutes.

                                        (7.)Arrange the pre-cut banana leaf on a cake pan or baking pan.

                                        (8.)Pour the mixture on the pan.

                                        (9.)Bake for 15 minutes.

                                        (10.)Remove from the oven then top with sliced salted egg and grated cheese (do not turn the oven off).

                                        (11.)Put back in the oven and bake for 15 to 20 minutes or until the color of the top turn medium brown.

                                        (12.)Remove from the oven and let cool.

                                        (13.)Brush with butter and top with grated coconut.

                                        (14.)Serve. Share and enjoy!
                                    </p>
                                </div>
                            </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
                {/*Puto*/}
                <Accordion type="single" collapsible className=" ">
                    <AccordionItem value="item-1" className= "border-2 rounded-lg shadow-black w-full h-full shadow-lg">
                        <AccordionTrigger className="font-bold text-xl">Puto</AccordionTrigger>
                            <AccordionContent>
                                <div className ="">
                                    <p>
                                    ▢1 cup all-purpose flour <br/>
                                    ▢1/2 cup granulated white sugar <br/>
                                    ▢3 teaspoons baking powder <br/>
                                    ▢1 cup fresh milk <br/>
                                    ▢1/4 teaspoon vanilla extract <br/>
                                    ▢3/4 cup shredded sharp cheddar cheese <br/>
                                    ▢5 cups water for steaming <br/>

                                    </p>
                                </div>
                            </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    )
}