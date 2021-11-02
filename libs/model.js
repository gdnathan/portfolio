// unusable because of an error in three
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export function loadFBXModel(
  scene,
  glbPath,
  options = { receiveShadows: true, castShadows: true }
) {
  const { receiveShadows, castShadows } = options
  return new Promise((resolve, reject) => {
    const Loader = new FBXLoader()

    Loader.load(
      glbPath,
      fbx => {
        const obj = fbx.scene
        obj.name = 'moon'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadows = receiveShadows
        obj.castShadows = castShadows
        scene.add(obj)

        obj.traverse(function(child) {
          if (child.isMesh) {
            child.receiveShadows = receiveShadows
            child.castShadows = castShadows
          }
        })

        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
