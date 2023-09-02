FROM php:8.1-cli

WORKDIR /var/www/html


RUN apt-get update && apt-get install -y libicu-dev zip unzip \
    && docker-php-ext-install pdo pdo_mysql \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl
# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# RUN apt-get update && apt-get install -y git

# Copy the CodeIgniter 4 application files into the container
COPY . /var/www/html
# Install CodeIgniter dependencies using Composer
RUN composer update
RUN composer install 

EXPOSE 8080

CMD ["php", "spark", "serve", "--host=0.0.0.0", "--port=8080"]