document
  .getElementById("project-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formani yuborishni to'xtatish

    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const github = document.getElementById("project-github").value;
    const vercel = document.getElementById("project-vercel").value;
    const image = document.getElementById("project-image").value;

    // Loyiha elementini yaratish
    const portfolio = document.querySelector(".portfolio");
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("portfolio-item");

    // Rasmni yaratish
    const img = document.createElement("img");
    img.src = image;
    img.alt = title;
    portfolioItem.appendChild(img);

    // Loyiha ma'lumotlarini yaratish
    const portfolioInfo = document.createElement("div");
    portfolioInfo.classList.add("portfolio-info");

    const h3 = document.createElement("h3");
    h3.textContent = title;
    portfolioInfo.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = description;
    portfolioInfo.appendChild(p);

    // Linklarni yaratish
    const links = document.createElement("div");
    links.classList.add("links");

    const githubLink = document.createElement("a");
    githubLink.href = github;
    githubLink.target = "_blank";
    githubLink.classList.add("github");
    githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
    links.appendChild(githubLink);

    const vercelLink = document.createElement("a");
    vercelLink.href = vercel;
    vercelLink.target = "_blank";
    vercelLink.classList.add("vercel");
    vercelLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Vercel';
    links.appendChild(vercelLink);

    portfolioInfo.appendChild(links);
    portfolioItem.appendChild(portfolioInfo);
    portfolio.appendChild(portfolioItem);

    // Formani tozalash
    document.getElementById("project-form").reset();
  });
document
  .getElementById("project-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Formani yuborishdan saqlanadi

    // Formadan ma'lumotlarni olish
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const github = document.getElementById("project-github").value;
    const vercel = document.getElementById("project-vercel").value;
    const image = document.getElementById("project-image").value;

    // Yangi portfolio elementi yaratish
    const newItem = document.createElement("div");
    newItem.classList.add("portfolio-item");

    newItem.innerHTML = `
        <img src="${image}" alt="${title}" />
        <div class="portfolio-info">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="links">
                <a href="${github}" target="_blank">GitHub</a>
                <a href="${vercel}" target="_blank">Vercel</a>
            </div>
        </div>
    `;

    // Portfolio section ga yangi elementni qo'shish
    const portfolioSection = document.querySelector(".portfolio");
    portfolioSection.appendChild(newItem);

    // Formani tozalash
    document.getElementById("project-form").reset();
  });

console.log("salom");
