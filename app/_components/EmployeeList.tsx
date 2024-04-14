'use client'

import { useEffect, useState } from "react"
import type { Employee } from "../_types/Employee"
import EmployeeItem from "./EmployeeItem"

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('/api/employee')
      const employeeData = await response.json()
      setEmployees(employeeData.data)
    }

    fetchEmployees()
  }, [])

  return (
    <ul>
    {
      employees.map((employee) => (
        <EmployeeItem employee={employee} key={employee.id}/>
      ))
    }
    </ul>
  )
}

export default EmployeeList