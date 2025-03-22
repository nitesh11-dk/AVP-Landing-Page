import React, { useState } from 'react';
import { Button } from "./Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { div } from 'framer-motion/client';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 50,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  const navigationItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Batches',
      id: 'services',
      subItems: [
        { name: 'Kids Batch', description: 'Fun and energetic dance moves for kids' },
        { name: 'Beginners Batch', description: 'Perfect for those starting their dance journey' },
        { name: 'Advanced Batch', description: 'For experienced dancers looking to excel' }
      ]
    },
    { name: 'Contact', id: 'contact' }
  ];

  return (
   <div className='sticky top-0 z-50'>
     <header className=" absolute top-0 z-50 w-[90%] mx-auto left-0 right-0 border-b backdrop-blur supports-[backdrop-filter]:bg-background/30 rounded-b-xl">
      <div className=" sm:px-20 px-8  flex h-16 items-center w-full justify-between   ">
      
        <div className="flex-shrink-0">
          <a href="#" className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 transition-all duration-300">
            AVP
          </a>
        </div>

       
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className="text-base font-semibold text-white hover:text-primary">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 bg-popover">
                          {item.subItems.map((subItem) => (
                            <div
                              key={subItem.name}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                              onClick={() => scrollToSection(item.id)}
                            >
                              <div className="text-sm font-bold leading-none">{subItem.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                                {subItem.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Button
                      variant="ghost"
                      className="text-base font-semibold hover:text-primary hover:bg-accent/50"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.name}
                    </Button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.name}
                    </Button>
                    {item.subItems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Button
                            key={subItem.name}
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm text-muted-foreground"
                            onClick={() => scrollToSection(item.id)}
                          >
                            {subItem.name}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
   </div>
  );
};

export default Navbar; 