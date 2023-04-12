import { SignJWT, importPKCS8 } from 'jose'

interface JWTProps {
  email: string
  role: string
}

export async function sign(payload: JWTProps): Promise<string> {
  const pk = process.env.JWT_SECRET
  if (!pk) {
    throw "please provide a jwt secret"
  }
  const secret = await importPKCS8(pk, 'RS256')
  const token = new SignJWT({
    email: payload.email,
    role: payload.role,
  })
  try {
    const signed = await token.setIssuer('yumlog')
      .setProtectedHeader({ alg: 'RS256' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(secret)
      
    return signed
  } catch (err) {
    console.error(err)
    throw "there was an error signing the jwt"
  }
}

