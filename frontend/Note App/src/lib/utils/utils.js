// a function that formats the date

export default function formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB",
       { day: "numeric",
        month: "short",
        year: "numeric",
       }
    )
}