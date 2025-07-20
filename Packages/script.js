document.addEventListener('DOMContentLoaded', function() {
    const cardsPerPage = 6; 
    const cardContainer = document.getElementById('cardContainer');
    const paginationElement = document.getElementById('pagination');
    let currentPage = 1;

    const allCardsData = [
        {
            
            city: "Paris",
            date: "05, October 2023",
            people: "90+",
            description: "Discover the vibrant city life and iconic landmarks of New York.",
            price: "1,600 $",
            rating: "4.8",
            class: "Paris",
            image: "images/bgimg.png"
            
        },
        {
            city: "Morocco",
            date: "20, September 2023",
            people: "110+",
            description: "Experience the romance and culture of the City of Lights.",
            price: "1,550 $",
            rating: "4.7",
            image:"https://www.planetware.com/wpimages/2020/02/morocco-in-pictures-beautiful-places-to-photograph-ait-benhaddou.jpg"
        },
        {
            city: "London",
            date: "10, November 2023",
            people: "75+",
            description: "Explore historical landmarks and vibrant culture in London.",
            price: "1,400 $",
            rating: "4.5",
            image:"https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I="
        },
        {
            city: "Tokyo",
            date: "01, December 2023",
            people: "150+",
            description: "Immerse yourself in the bustling metropolis of Tokyo.",
            price: "2,000 $",
            rating: "4.9",
            image:"https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg"
        },
        {
            city: "Rome",
            date: "15, October 2023",
            people: "80+",
            description: "Step back in time and explore the ancient wonders of Rome.",
            price: "1,300 $",
            rating: "4.6",
            image:"https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5jaWVudCUyMHJvbWV8ZW58MHx8MHx8fDA%3D"
        },
        {
            city: "Sydney",
            date: "25, November 2023",
            people: "100+",
            description: "Enjoy the beautiful beaches and iconic opera house in Sydney.",
            price: "1,800 $",
            rating: "4.7",
            image:"https://www.downunderendeavours.com/wp-content/uploads/2019/05/sydney-things-to-do-800x500-Sydney-Opera-House-8.jpg"
        },
        {
            city: "Dubai",
            date: "08, January 2024",
            people: "120+",
            description: "Experience luxury and modern architecture in Dubai.",
            price: "1,900 $",
            rating: "4.8",
            image:"https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
        },
        {
            city: "Barcelona",
            date: "03, September 2023",
            people: "95+",
            description: "Discover the unique architecture and vibrant street life of Barcelona.",
            price: "1,450 $",
            rating: "4.6",
            image:"https://media.cntraveler.com/photos/591f1c7d1f187a2af3dedef0/16:9/w_2580,c_limit/barcelona-park-guell-GettyImages-512152500.jpg"
        },
        {
            city: "Amsterdam",
            date: "12, October 2023",
            people: "60+",
            description: "Explore canals, museums, and charming streets in Amsterdam.",
            price: "1,200 $",
            rating: "4.4",
            image:"https://media.timeout.com/images/106280160/750/562/image.jpg"
        },
        {
            city: "Rio de Janeiro",
            date: "28, February 2024",
            people: "130+",
            description: "Experience the lively culture and stunning landscapes of Rio.",
            price: "1,700 $",
            rating: "4.7",
            image:"https://media.istockphoto.com/id/608540602/photo/aerial-panorama-of-botafogo-bay-rio-de-janeiro.jpg?s=612x612&w=0&k=20&c=9vsK_9r4ldoLyfS6oLnUbvpQOgYCfzr4xCZ1-YFNJZo="
        },
        {
            city: "Kyoto",
            date: "07, March 2024",
            people: "70+",
            description: "Discover ancient temples and beautiful gardens in Kyoto.",
            price: "1,650 $",
            rating: "4.8",
            image:"https://content.r9cdn.net/rimg/dimg/83/d4/85f68013-city-20339-16489ec9b8b.jpg?crop=true&width=1020&height=498"
        },
        {
            city: "Cairo",
            date: "18, April 2024",
            people: "50+",
            description: "Explore the rich history and ancient wonders of Cairo.",
            price: "1,100 $",
            rating: "4.3",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cairo_From_Tower_%28cropped%29.jpg/960px-Cairo_From_Tower_%28cropped%29.jpg"
        }
    ];

    const totalPages = Math.ceil(allCardsData.length / cardsPerPage);

    function renderCards() {
        cardContainer.innerHTML = '';
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const cardsToDisplay = allCardsData.slice(startIndex, endIndex);

        cardsToDisplay.forEach(card => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            colDiv.innerHTML =`
                <div class="card h-100">
                    <div class="card-header-custom" style="background-image: url('${card.image}'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 250px; display: flex; flex-direction: column; justify-content: space-between; position: relative; color: white;z-index:0"></div>
                    <div class="card-body">
                        <div class="info-icons">
                            <span><i class="bi bi-calendar"></i> ${card.date}</span>
                            <span><i class="bi bi-people"></i> ${card.people} People</span>
                        </div>
                        <h5 class="card-title card-title-main">${card.city}</h5>
                        <p class="card-text card-text-description">${card.description}</p>
                    </div>
                    <div class="card-footer">
                        <span class="price">${card.price}</span>
                        <span class="rating">${card.rating} <i class="bi bi-star-fill"></i></span>
                    </div>
                </div>
            `;
            cardContainer.appendChild(colDiv);
        });
    }

    function renderPagination() {
        paginationElement.innerHTML = ''; 

        const prevLi = document.createElement('li');
        prevLi.classList.add('page-item');
        if (currentPage === 1) prevLi.classList.add('disabled');
        prevLi.innerHTML = `<a class="page-link rounded-pill" href="#" aria-label="Previous" data-page="${currentPage - 1}">
                                <span aria-hidden="true">&laquo;</span>
                            </a>`;
        paginationElement.appendChild(prevLi);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.classList.add('page-item');
            if (i === currentPage) li.classList.add('active');
            li.innerHTML = `<a class="page-link rounded-pill" href="#" data-page="${i}">${i}</a>`;
            paginationElement.appendChild(li);
        }

        const nextLi = document.createElement('li');
        nextLi.classList.add('page-item');
        if (currentPage === totalPages) nextLi.classList.add('disabled');
        nextLi.innerHTML = `<a class="page-link rounded-pill" href="#" aria-label="Next" data-page="${currentPage + 1}">
                                <span aria-hidden="true">&raquo;</span>
                            </a>`;
        paginationElement.appendChild(nextLi);

        paginationElement.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const newPage = parseInt(this.dataset.page);
                if (!isNaN(newPage) && newPage > 0 && newPage <= totalPages && newPage !== currentPage) {
                    currentPage = newPage;
                    renderCards();
                    renderPagination();
                }
            });
        });
    }

    renderCards();
    renderPagination();
});