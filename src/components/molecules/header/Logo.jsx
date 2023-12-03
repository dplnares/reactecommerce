import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="flex">
      <Link to="/">
        <img src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/bltd86c2476428233c4/654883c4d39654040a309644/falabella-orange-logo.svg" alt="Logo Falabella" />
      </Link>
    </div>
  )
}

export default Logo