import { useEffect, useRef } from "react"
import * as THREE from "three"

function BackgroundSpace() {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    )

    camera.position.z = 600

    const starCount = 2800
    const starGeo = new THREE.BufferGeometry()

    const starPositions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {

      starPositions[i * 3] = (Math.random() - 0.5) * 3000
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 3000
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000

    }

    starGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    )

    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1
      })
    )

    scene.add(stars)

    function animate() {

      stars.rotation.y += 0.0006

      renderer.render(scene, camera)

      requestAnimationFrame(animate)

    }

    animate()

    function handleResize() {

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)

    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
    }

  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  )

}

export default BackgroundSpace