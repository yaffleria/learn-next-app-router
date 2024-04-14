import type { Employee } from "../_types/Employee";

function EmployeeItem({ employee }: { employee: Employee }) {
  return (
    <li key={employee.id}>
      Name: {employee.employee_name} | Id: {employee.id} | Age:{" "}
      {employee.employee_age}
    </li>
  )
}

export default EmployeeItem;