
// This file handles authentication routes for testing purposes
// This portfolio website does not require authentication functionality
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  
  if (action === 'csrf') {
    return new Response(JSON.stringify({ csrfToken: 'dummy-token' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }
  
  return new Response(JSON.stringify({ 
    message: 'Authentication not required for this portfolio website',
    status: 'disabled'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Handle signup simulation
    if (body.email && body.password) {
      return new Response(JSON.stringify({ 
        message: 'Authentication not required for this portfolio website',
        status: 'disabled'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    
    return new Response(JSON.stringify({ 
      message: 'Authentication not required for this portfolio website',
      status: 'disabled'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: 'Authentication not required for this portfolio website',
      status: 'disabled'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
