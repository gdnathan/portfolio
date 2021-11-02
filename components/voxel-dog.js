// unusable because of an error in three
import { useState, useEffect, useRef, useCallback } from 'react'
import { Box ,Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
// import { OribitControls } from 'three/examples/js/controls/OrbitControls'
import { loadFBXModel } from '../libs/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()

  return <Box ref={refContainer}>Dog</Box>
}

export default VoxelDog
