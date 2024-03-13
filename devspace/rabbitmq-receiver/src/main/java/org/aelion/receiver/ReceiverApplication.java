package org.aelion.receiver;

import com.rabbitmq.client.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

@SpringBootApplication
public class ReceiverApplication {
	// Logger
	static Logger logger = LoggerFactory.getLogger(ReceiverApplication.class);
	// Bus name
	private final static String QUEUE_NAME = "hello";
	public static void main(String[] args) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();
		factory.setHost("localhost");
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();
		channel.queueDeclare(
				QUEUE_NAME,
				false,
				false,
				false,
				null
		);
		logger.info("Waiting for messages. CTRL + C to exit");
		Consumer consumer = new DefaultConsumer(channel) {
		@Override
			public  void handleDelivery(
					String consumerType,
					Envelope envelope,
					AMQP.BasicProperties properties,
					byte[] body
		) throws IOException {
			String message = new String(body, StandardCharsets.UTF_8);
			logger.info("Received : " + message);
			};
		};
		channel.basicConsume(QUEUE_NAME, true, consumer);
	}

}
