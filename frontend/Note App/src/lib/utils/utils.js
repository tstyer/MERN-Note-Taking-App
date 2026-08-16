// a function that formats the date

export default function formatDate() {
    return Date.toLocalDateString("en-UK",
       { day: "numeric",
        month: "short",
        year: "numeric",
       }
    )
}