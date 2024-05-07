"use client";

import { Canvas } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { use } from "react";

export default function Main() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    );
  }

  if (pathname === "/journey-so-far") {
    return <div className="w-full h-full">Journey</div>;
  }

  if (pathname === "/skills") {
    return <div className="w-full h-full">Skills</div>;
  }

  if (pathname === "/education") {
    return <div className="w-full h-full">Education</div>;
  }

  if (pathname === "/experience") {
    return <div className="w-full h-full">Experience</div>;
  }

  if (pathname === "/contact") {
    return <div className="w-full h-full">Contact</div>;
  }
}
