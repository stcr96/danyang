use actix_web::{get, web, App, HttpRequest, HttpResponse, HttpServer, Responder};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(health_check)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}

#[get("/health")]
async fn health_check() -> impl Responder {
    HttpResponse::Ok()
}
