(function () {
  let info = document.querySelectorAll(".moduleoutput tbody")[0];
  let nodes = document.querySelectorAll(".moduleoutput tbody")[1];
  function get(tbody, row, col) {
    let trs = tbody.querySelectorAll("tr");
    return trs[row].querySelectorAll("td")[col].innerText;
  }
  let server_port = get(info, 0, 1);
  let password = get(info, 0, 3);

  let servers = Array.from(nodes.querySelectorAll("tr")).map(tr => {
    let tds = tr.querySelectorAll("td");
    return {
      remarks: tds[1].innerText,
      server: tds[3].innerText,
      method: tds[2].innerText,
      server_port,
      password,
    };
  });
  console.log(JSON.stringify(servers));
})();
