// a function that formats the date

export default function formatDate(date) {
    return new Date(date).toLocaleDateString("en-UK",
       { day: "numeric",
        month: "short",
        year: "numeric",
       }
    )
}