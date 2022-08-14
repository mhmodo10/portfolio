import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Model({ ...props }) {
  const group = useRef();
  const mixer = useRef(null);
  const myModel = useGLTF("/my_avatar_waving.glb");
  const { actions } = useAnimations(myModel.animations, group);
  // const mixer = new THREE.AnimationMixer()
  useEffect(() => {
    if(actions)
      actions["Armature|mixamo.com|Layer0"].play()
  }, [actions])

  // useFrame(({ clock }) => mixer.current && mixer.current.update(clock.getElapsedTime()))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={myModel.nodes.Hips} />
          <skinnedMesh
            name="EyeLeft"
            geometry={myModel.nodes.EyeLeft.geometry}
            material={myModel.materials["Wolf3D_Eye.001"]}
            skeleton={myModel.nodes.EyeLeft.skeleton}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={myModel.nodes.EyeRight.geometry}
            material={myModel.materials["Wolf3D_Eye.001"]}
            skeleton={myModel.nodes.EyeRight.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={myModel.nodes.Wolf3D_Head.geometry}
            material={myModel.materials["Wolf3D_Skin.001"]}
            skeleton={myModel.nodes.Wolf3D_Head.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={myModel.nodes.Wolf3D_Hair.geometry}
            material={myModel.materials["Wolf3D_Hair.001"]}
            skeleton={myModel.nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={myModel.nodes.Wolf3D_Outfit_Footwear.geometry}
            material={myModel.materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={myModel.nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={myModel.nodes.Wolf3D_Teeth.geometry}
            material={myModel.materials["Wolf3D_Teeth.001"]}
            skeleton={myModel.nodes.Wolf3D_Teeth.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={myModel.nodes.Wolf3D_Outfit_Top.geometry}
            material={myModel.materials["Wolf3D_Outfit_Top.001"]}
            skeleton={myModel.nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={myModel.nodes.Wolf3D_Outfit_Bottom.geometry}
            material={myModel.materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={myModel.nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={myModel.nodes.Wolf3D_Body.geometry}
            material={myModel.materials["Wolf3D_Body.001"]}
            skeleton={myModel.nodes.Wolf3D_Body.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/my_avatar_waving.glb");