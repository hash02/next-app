import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    


    <form onsubmit="validateFormWithJS()">
  <label for="rollNumber">Roll Number:</label>
  <input type="text" name="rollNumber" id="rollNumber" />

  <label for="name">Name:</label>
  <input type="text" name="name" id="name" />

  <button type="submit">Submit</button>
</form>

<script>
  function validateFormWithJS() {
    const name = document.querySelector('#name').value
    const rollNumber = document.querySelector('#rollNumber').value

    if (!name) {
      alert('Please enter your name.')
      return false
    }

    if (rollNumber.length < 3) {
      alert('Roll Number should be at least 3 digits long.')
      return false
    }
  }
</script>
</div>
      )}