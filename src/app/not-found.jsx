
import Link from 'next/link'

function Error() {
  return (
    <div className='e-container'>
    <h1>Oops! Something Went Wrong</h1>
      <img src="/assets/errorimg.png" alt="Something Went Wrong. Error." />
      <p>
      We’re sorry, but it looks like the page you were looking for is not available. This might be due to an incorrect URL, or the page may have been moved or deleted.
      </p><p>
Don’t worry, though! You can easily navigate back to our homepage to find what you’re looking for.
      </p>
      <Link href={"/"}>Go Back to Home</Link>
      <p>
      Thank you for your understanding, and we hope to see you again soon! If you need further assistance, please feel free to contact our support team.
      </p>
    </div>
  )
}

export default Error
