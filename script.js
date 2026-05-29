function calculate() {

    let queue = document.getElementById("queue").value
        .split(",")
        .map(Number);

    let head = parseInt(document.getElementById("head").value);

    let algo = document.getElementById("algo").value;

    let output = "";

    if (algo === "fcfs") {

        let total = 0;
        let current = head;

        output += "FCFS Disk Scheduling\n\n";

        queue.forEach(req => {

            total += Math.abs(req - current);

            output += current + " -> " + req + "\n";

            current = req;
        });

        output += "\nTotal Seek Time = " + total;
    }

    document.getElementById("output").innerText = output;
}
