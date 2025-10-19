"use client"

import { useState } from "react"

export default function TestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cvLink: ""
  })

  const [result, setResult] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResult("Submitting...")

    try {
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      setResult(`Response: ${JSON.stringify(data, null, 2)}`)
    } catch (error) {
      setResult(`Error: ${error}`)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Form</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium">CV Link</label>
          <input
            type="url"
            value={formData.cvLink}
            onChange={(e) => setFormData(prev => ({ ...prev, cvLink: e.target.value }))}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Result:</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {result}
        </pre>
      </div>
    </div>
  )
}

