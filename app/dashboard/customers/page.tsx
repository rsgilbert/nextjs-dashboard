export default async function Customers() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div>
        Customers
        </div>
    )
}