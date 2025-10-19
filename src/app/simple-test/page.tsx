"use client"

import { useState } from "react"

export default function SimpleTest() {
  const [message, setMessage] = useState("")

  const testAPI = async () => {
    try {
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: "Test",
          lastName: "User", 
          email: "test@example.com",
          phone: "1234567890",
          cvLink: "https://example.com/cv"
        }),
      })

      const data = await response.json()
      setMessage(`Success: ${JSON.stringify(data)}`)
    } catch (error) {
      setMessage(`Error: ${error}`)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">API Test</h1>
      <button 
        onClick={testAPI}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Test API
      </button>
      <div className="mt-4">
        <p>Result: {message}</p>
      </div>
    </div>
  )
}

